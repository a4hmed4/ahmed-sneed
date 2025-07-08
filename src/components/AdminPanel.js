import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { db, storage, auth } from '../firebase';
import { collection, addDoc, updateDoc, deleteDoc, doc, getDocs } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { signInWithEmailAndPassword, signOut } from 'firebase/auth';

const AdminPanel = () => {
  const [activeTab, setActiveTab] = useState('projects');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // Project management
  const [projects, setProjects] = useState([]);
  const [newProject, setNewProject] = useState({
    title: '',
    description: '',
    technologies: '',
    achievements: '',
    githubLink: '',
    demoLink: '',
    image: null
  });

  // About management
  const [aboutData, setAboutData] = useState({
    summary: '',
    experience: '',
    education: '',
    publications: '',
    conferences: '',
    experiences: '',
    languages: ''
  });

  // Skills management
  const [skills, setSkills] = useState({
    programmingLanguages: '',
    frameworks: '',
    ai: '',
    dataAnalysis: '',
    cloudTools: '',
    hardware: '',
    softSkills: ''
  });

  // Section visibility
  const [sectionVisibility, setSectionVisibility] = useState({
    hero: true,
    about: true,
    projects: true,
    cv: true,
    skills: true,
    contact: true
  });

  // Login function
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setIsLoggedIn(true);
    } catch (error) {
      setError('Login failed: ' + error.message);
    }
    setLoading(false);
  };

  // Logout function
  const handleLogout = async () => {
    try {
      await signOut(auth);
      setIsLoggedIn(false);
      setEmail('');
      setPassword('');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  // Add new project
  const handleAddProject = async () => {
    if (!newProject.title || !newProject.description) {
      setError('Please fill in required fields');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      let imageUrl = '';
      if (newProject.image) {
        const imageRef = ref(storage, `projects/${newProject.image.name}`);
        await uploadBytes(imageRef, newProject.image);
        imageUrl = await getDownloadURL(imageRef);
      }

      const projectData = {
        ...newProject,
        imageUrl,
        technologies: newProject.technologies.split(',').map(tech => tech.trim()),
        achievements: newProject.achievements.split('\n').filter(achievement => achievement.trim()),
        createdAt: new Date()
      };

      await addDoc(collection(db, 'projects'), projectData);
      setNewProject({
        title: '',
        description: '',
        technologies: '',
        achievements: '',
        githubLink: '',
        demoLink: '',
        image: null
      });
      setError('');
      alert('Project added successfully!');
    } catch (error) {
      setError('Error adding project: ' + error.message);
    }
    setLoading(false);
  };

  // Update about data
  const handleUpdateAbout = async () => {
    setLoading(true);
    setError('');
    
    try {
      const aboutRef = doc(db, 'content', 'about');
      await updateDoc(aboutRef, aboutData);
      setError('');
      alert('About data updated successfully!');
    } catch (error) {
      setError('Error updating about data: ' + error.message);
    }
    setLoading(false);
  };

  // Update skills
  const handleUpdateSkills = async () => {
    setLoading(true);
    setError('');
    
    try {
      const skillsRef = doc(db, 'content', 'skills');
      await updateDoc(skillsRef, skills);
      setError('');
      alert('Skills updated successfully!');
    } catch (error) {
      setError('Error updating skills: ' + error.message);
    }
    setLoading(false);
  };

  // Update section visibility
  const handleUpdateVisibility = async () => {
    setLoading(true);
    setError('');
    
    try {
      const visibilityRef = doc(db, 'settings', 'visibility');
      await updateDoc(visibilityRef, sectionVisibility);
      setError('');
      alert('Section visibility updated successfully!');
    } catch (error) {
      setError('Error updating visibility: ' + error.message);
    }
    setLoading(false);
  };

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl p-8 shadow-2xl border border-gray-200 dark:border-gray-700 max-w-md w-full"
        >
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Admin Access
            </h2>
            <p className="text-gray-600 dark:text-gray-400 mt-2">
              Secure administrative panel
            </p>
          </div>
          
          {error && (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
            >
              {error}
            </motion.div>
          )}
          
          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 dark:text-gray-300 mb-2 font-medium">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white transition-colors"
                required
              />
            </div>
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg font-medium hover:shadow-lg transition-all disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="loading-spinner mr-3"></div>
                  Authenticating...
                </div>
              ) : (
                'Login'
              )}
            </motion.button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-between items-center mb-8"
        >
          <div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Admin Dashboard
            </h1>
            <p className="text-gray-600 dark:text-gray-400 mt-1">
              Manage your portfolio content
            </p>
          </div>
          <motion.button
            onClick={handleLogout}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 bg-gradient-to-r from-red-600 to-pink-600 text-white rounded-lg hover:shadow-lg transition-all"
          >
            Logout
          </motion.button>
        </motion.div>

        {error && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg"
          >
            {error}
          </motion.div>
        )}

        {/* Tabs */}
        <div className="bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700">
          <div className="border-b border-gray-200 dark:border-gray-700">
            <nav className="flex space-x-8 px-6">
              {['projects', 'about', 'skills', 'visibility'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-4 px-1 border-b-2 font-medium text-sm capitalize transition-colors ${
                    activeTab === tab
                      ? 'border-gradient-to-r from-blue-600 to-purple-600 text-blue-600 dark:text-blue-400'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 dark:text-gray-400 dark:hover:text-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>

          <div className="p-6">
            <AnimatePresence mode="wait">
              {/* Projects Tab */}
              {activeTab === 'projects' && (
                <motion.div
                  key="projects"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Manage Projects</h2>
                  
                  {/* Add New Project Form */}
                  <div className="bg-gray-50 dark:bg-gray-700 rounded-xl p-6">
                    <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Add New Project</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">Title *</label>
                        <input
                          type="text"
                          value={newProject.title}
                          onChange={(e) => setNewProject({...newProject, title: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">Technologies (comma-separated)</label>
                        <input
                          type="text"
                          value={newProject.technologies}
                          onChange={(e) => setNewProject({...newProject, technologies: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-colors"
                          placeholder="Python, React, TensorFlow"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">Description *</label>
                        <textarea
                          value={newProject.description}
                          onChange={(e) => setNewProject({...newProject, description: e.target.value})}
                          rows="3"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">GitHub Link</label>
                        <input
                          type="url"
                          value={newProject.githubLink}
                          onChange={(e) => setNewProject({...newProject, githubLink: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-colors"
                        />
                      </div>
                      <div>
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">Demo Link</label>
                        <input
                          type="url"
                          value={newProject.demoLink}
                          onChange={(e) => setNewProject({...newProject, demoLink: e.target.value})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-colors"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">Achievements (one per line)</label>
                        <textarea
                          value={newProject.achievements}
                          onChange={(e) => setNewProject({...newProject, achievements: e.target.value})}
                          rows="3"
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-colors"
                          placeholder="🏆 1st place in competition&#10;🥈 2nd place in hackathon"
                        />
                      </div>
                      <div className="md:col-span-2">
                        <label className="block text-gray-700 dark:text-gray-300 mb-2">Project Image</label>
                        <input
                          type="file"
                          accept="image/*"
                          onChange={(e) => setNewProject({...newProject, image: e.target.files[0]})}
                          className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-colors"
                        />
                      </div>
                    </div>
                    <motion.button
                      onClick={handleAddProject}
                      disabled={loading}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="mt-4 px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                    >
                      {loading ? 'Adding...' : 'Add Project'}
                    </motion.button>
                  </div>
                </motion.div>
              )}

              {/* About Tab */}
              {activeTab === 'about' && (
                <motion.div
                  key="about"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Manage About Content</h2>
                  
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Professional Summary</label>
                      <textarea
                        value={aboutData.summary}
                        onChange={(e) => setAboutData({...aboutData, summary: e.target.value})}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Experience</label>
                      <textarea
                        value={aboutData.experience}
                        onChange={(e) => setAboutData({...aboutData, experience: e.target.value})}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Education</label>
                      <textarea
                        value={aboutData.education}
                        onChange={(e) => setAboutData({...aboutData, education: e.target.value})}
                        rows="4"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-colors"
                      />
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={handleUpdateAbout}
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {loading ? 'Updating...' : 'Update About'}
                  </motion.button>
                </motion.div>
              )}

              {/* Skills Tab */}
              {activeTab === 'skills' && (
                <motion.div
                  key="skills"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Manage Skills</h2>
                  
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Programming Languages (comma-separated)</label>
                      <input
                        type="text"
                        value={skills.programmingLanguages}
                        onChange={(e) => setSkills({...skills, programmingLanguages: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Frameworks & Libraries (comma-separated)</label>
                      <input
                        type="text"
                        value={skills.frameworks}
                        onChange={(e) => setSkills({...skills, frameworks: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">AI & ML (comma-separated)</label>
                      <input
                        type="text"
                        value={skills.ai}
                        onChange={(e) => setSkills({...skills, ai: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 dark:text-gray-300 mb-2">Data Analysis (comma-separated)</label>
                      <input
                        type="text"
                        value={skills.dataAnalysis}
                        onChange={(e) => setSkills({...skills, dataAnalysis: e.target.value})}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-600 dark:border-gray-500 dark:text-white transition-colors"
                      />
                    </div>
                  </div>
                  
                  <motion.button
                    onClick={handleUpdateSkills}
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {loading ? 'Updating...' : 'Update Skills'}
                  </motion.button>
                </motion.div>
              )}

              {/* Visibility Tab */}
              {activeTab === 'visibility' && (
                <motion.div
                  key="visibility"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-6"
                >
                  <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Section Visibility</h2>
                  
                  <div className="space-y-4">
                    {Object.keys(sectionVisibility).map((section) => (
                      <div key={section} className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-700 rounded-lg">
                        <span className="capitalize font-medium text-gray-900 dark:text-white">{section}</span>
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={sectionVisibility[section]}
                            onChange={(e) => setSectionVisibility({
                              ...sectionVisibility,
                              [section]: e.target.checked
                            })}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-gradient-to-r peer-checked:from-blue-600 peer-checked:to-purple-600"></div>
                        </label>
                      </div>
                    ))}
                  </div>
                  
                  <motion.button
                    onClick={handleUpdateVisibility}
                    disabled={loading}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg hover:shadow-lg transition-all disabled:opacity-50"
                  >
                    {loading ? 'Updating...' : 'Update Visibility'}
                  </motion.button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel; 