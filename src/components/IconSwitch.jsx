export const IconSwitch = ({ icon, onSwitch }) => {
  return (
    <i className="material-icons">
        <a href="#" className="switch" onClick={() => onSwitch(icon)}>{icon}</a>
    </i>
  )
}

export default IconSwitch