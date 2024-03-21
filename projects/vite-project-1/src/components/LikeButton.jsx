import PropTypes from "prop-types";
import LikeSvg from "./LikeSvg";

/**
 * children: En React es una prop especial que se utiliza para pasar componentes
 * como datos a otros componentes. Children puede ser cualquier cosa que pueda
 * renderizar React(números, string, elementos o una función).
 *
 */
function LikeButton({ children }) {
  return (
    <button className="like-btn">
      {children}
      <LikeSvg />
    </button>
  );
}

LikeButton.propTypes = {
  children: PropTypes.node,
};

export default LikeButton;
