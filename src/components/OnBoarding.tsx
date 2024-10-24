import React, { useState } from 'react';
import { Camera, Smile, Mail, Globe, CheckCircle2, AlertCircle } from 'lucide-react';

const AlternativeOnboarding = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    displayName: '',
    email: '',
    avatar: null,
    avatarPreview: null,
    location: '',
    bio: '',
    interests: [],
    socialLinks: {
      twitter: '',
      github: '',
      linkedin: ''
    }
  });

  const [currentStep, setCurrentStep] = useState(0);
  const [errors, setErrors] = useState({});

  const interestOptions = [
    'Technology', 'Design', 'Marketing', 'Business',
    'Art', 'Music', 'Sports', 'Travel', 'Food',
    'Photography', 'Writing', 'Gaming'
  ];

  const steps = [
    {
      title: 'Basic Info',
      description: 'Let\'s start with your basic information'
    },
    {
      title: 'Profile Picture',
      description: 'Add a photo to help people recognize you'
    },
    {
      title: 'Bio & Location',
      description: 'Tell us more about yourself'
    },
    {
      title: 'Interests',
      description: 'Select topics that interest you'
    }
  ];

  const handleFileChange = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          avatar: file,
          avatarPreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const toggleInterest = (interest) => {
    setFormData(prev => ({
      ...prev,
      interests: prev.interests.includes(interest)
        ? prev.interests.filter(i => i !== interest)
        : [...prev.interests, interest]
    }));
  };

  const handleSocialLinkChange = (platform, value) => {
    setFormData(prev => ({
      ...prev,
      socialLinks: {
        ...prev.socialLinks,
        [platform]: value
      }
    }));
  };

  const validateStep = () => {
    const newErrors = {};
    
    switch (currentStep) {
      case 0:
        if (!formData.fullName) newErrors.fullName = 'Full name is required';
        if (!formData.displayName) newErrors.displayName = 'Display name is required';
        if (!formData.email) newErrors.email = 'Email is required';
        else if (!/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = 'Invalid email format';
        break;
      case 1:
        if (!formData.avatar) newErrors.avatar = 'Profile picture is required';
        break;
      case 2:
        if (!formData.bio) newErrors.bio = 'Bio is required';
        if (!formData.location) newErrors.location = 'Location is required';
        break;
      case 3:
        if (formData.interests.length === 0) newErrors.interests = 'Select at least one interest';
        break;
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (validateStep()) {
      // Add your API call here
      console.log('Form submitted:', formData);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
      <div className="w-full max-w-4xl bg-white rounded-2xl shadow-xl overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 min-h-[600px]">
          {/* Sidebar */}
          <div className="bg-blue-600 p-8 text-white">
            <h2 className="text-2xl font-bold mb-6">Welcome aboard!</h2>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <div 
                  key={index}
                  className={`flex items-start space-x-3 ${
                    currentStep === index ? 'opacity-100' : 'opacity-60'
                  }`}
                >
                  <div className={`
                    w-6 h-6 rounded-full flex items-center justify-center mt-1
                    ${currentStep > index ? 'bg-white text-blue-600' : 
                      currentStep === index ? 'border-2 border-white' : 'border border-white/60'}
                  `}>
                    {currentStep > index ? <CheckCircle2 size={16} /> : index + 1}
                  </div>
                  <div>
                    <h3 className="font-medium">{step.title}</h3>
                    <p className="text-sm text-white/80">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Main Content */}
          <div className="col-span-2 p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Step 1: Basic Info */}
              {currentStep === 0 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="text-red-500 text-sm mt-1">{errors.fullName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Display Name
                    </label>
                    <input
                      type="text"
                      name="displayName"
                      value={formData.displayName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Choose a display name"
                    />
                    {errors.displayName && (
                      <p className="text-red-500 text-sm mt-1">{errors.displayName}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                      placeholder="Enter your email"
                    />
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                    )}
                  </div>
                </div>
              )}

              {/* Step 2: Profile Picture */}
              {currentStep === 1 && (
                <div className="flex flex-col items-center space-y-6">
                  <div className="relative">
                    {formData.avatarPreview ? (
                      <img
                        src={formData.avatarPreview}
                        alt="Profile preview"
                        className="w-40 h-40 rounded-full object-cover"
                      />
                    ) : (
                      <div className="w-40 h-40 rounded-full bg-gray-100 flex items-center justify-center">
                        <Camera size={40} className="text-gray-400" />
                      </div>
                    )}
                    <label className="absolute bottom-0 right-0 bg-blue-600 p-2 rounded-full cursor-pointer hover:bg-blue-700">
                      <Camera size={20} className="text-white" />
                      <input
                        type="file"
                        className="hidden"
                        onChange={handleFileChange}
                        accept="image/*"
                      />
                    </label>
                  </div>
                  {errors.avatar && (
                    <p className="text-red-500 text-sm">{errors.avatar}</p>
                  )}
                  <p className="text-sm text-gray-500 text-center max-w-sm">
                    Upload a profile picture that clearly shows your face.
                    Square images work best.
                  </p>
                </div>
              )}

              {/* Step 3: Bio & Location */}
              {currentStep === 2 && (
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Location
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        name="location"
                        value={formData.location}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder="Where are you based?"
                      />
                      <Globe className="absolute left-3 top-2.5 text-gray-400" size={20} />
                    </div>
                    {errors.location && (
                      <p className="text-red-500 text-sm mt-1">{errors.location}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                      Bio
                    </label>
                    <textarea
                      name="bio"
                      value={formData.bio}
                      onChange={handleInputChange}
                      className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 h-32 resize-none"
                      placeholder="Tell us about yourself..."
                    />
                    {errors.bio && (
                      <p className="text-red-500 text-sm mt-1">{errors.bio}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Social Links (Optional)
                    </label>
                    {Object.keys(formData.socialLinks).map((platform) => (
                      <input
                        key={platform}
                        type="text"
                        value={formData.socialLinks[platform]}
                        onChange={(e) => handleSocialLinkChange(platform, e.target.value)}
                        className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500"
                        placeholder={`${platform.charAt(0).toUpperCase() + platform.slice(1)} profile URL`}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Step 4: Interests */}
              {currentStep === 3 && (
                <div className="space-y-4">
                  <p className="text-sm text-gray-500">
                    Select topics that interest you. This helps us personalize your experience.
                  </p>
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                    {interestOptions.map((interest) => (
                      <button
                        key={interest}
                        type="button"
                        onClick={() => toggleInterest(interest)}
                        className={`p-3 rounded-lg border text-sm font-medium transition-colors
                          ${formData.interests.includes(interest)
                            ? 'bg-blue-50 border-blue-500 text-blue-700'
                            : 'border-gray-200 text-gray-600 hover:border-blue-500'
                          }`}
                      >
                        {interest}
                      </button>
                    ))}
                  </div>
                  {errors.interests && (
                    <p className="text-red-500 text-sm">{errors.interests}</p>
                  )}
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between mt-8">
                {currentStep > 0 && (
                  <button
                    type="button"
                    onClick={() => setCurrentStep(prev => prev - 1)}
                    className="px-6 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
                  >
                    Back
                  </button>
                )}
                {currentStep < steps.length - 1 ? (
                  <button
                    type="button"
                    onClick={handleNext}
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ml-auto"
                  >
                    Continue
                  </button>
                ) : (
                  <button
                    type="submit"
                    className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 ml-auto"
                  >
                    Complete Setup
                  </button>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AlternativeOnboarding;