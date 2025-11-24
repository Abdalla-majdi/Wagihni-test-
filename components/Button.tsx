import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  fullWidth?: boolean;
  href?: string;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  fullWidth = false, 
  className = '', 
  href,
  ...props 
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-500 focus:ring-offset-slate-900 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "border-transparent text-white bg-brand-600 hover:bg-brand-700 shadow-lg shadow-brand-500/20",
    secondary: "border-transparent text-brand-100 bg-slate-800 hover:bg-slate-700",
    outline: "border-slate-600 text-slate-300 hover:bg-slate-800 hover:text-white"
  };

  const widthClass = fullWidth ? "w-full" : "";
  const combinedClasses = `${baseStyles} ${variants[variant]} ${widthClass} ${className}`;

  if (href) {
    return (
      <a 
        href={href} 
        className={combinedClasses}
        {...(props as any)} 
      >
        {children}
      </a>
    );
  }

  return (
    <button 
      className={combinedClasses} 
      {...props}
    >
      {children}
    </button>
  );
};