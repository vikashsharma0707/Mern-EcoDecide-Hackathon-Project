// const ToggleSwitch = ({ label, value, onChange }) => {
//   return (
//     <div className="flex items-center justify-between py-4 border-b border-white/10">
//       <span className="text-white text-lg">{label}</span>
//       <label className="relative inline-flex items-center cursor-pointer">
//         <input
//           type="checkbox"
//           checked={value}
//           onChange={onChange}
//           className="sr-only peer"
//         />
//         <div className="w-14 h-7 bg-gray-700 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-emerald-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[4px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-emerald-500"></div>
//       </label>
//     </div>
//   );
// };

// export default ToggleSwitch;



import "./ToggleSwitch.css";

const ToggleSwitch = ({ label, value, onChange }) => {
  return (
    <div className="toggle-row">
      <div className="toggle-info">
        <span className="toggle-label">
          {label}
        </span>
      </div>

      <label className="toggle-switch">
        <input
          type="checkbox"
          checked={value}
          onChange={onChange}
        />

        <span className="toggle-slider"></span>
      </label>
    </div>
  );
};

export default ToggleSwitch;