import React from 'react'

const FeatureCard = ({ icon, topic, subText }) => {
  return (
    <div className="w-full sm:w-[280px] md:w-[300px] text-left border border-slate-200 dark:border-slate-700 rounded-2xl flex flex-col gap-4 py-5 px-6 shadow-md hover:shadow-lg transition duration-300 bg-white dark:bg-gray-800">
      <div className="text-blue-700 dark:text-blue-400 text-3xl">
        {icon}
      </div>
      <h1 className="text-xl font-semibold text-gray-900 dark:text-white">
        {topic}
      </h1>
      <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
        {subText}
      </p>
    </div>
  )
}

export default FeatureCard