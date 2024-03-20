import PropTypes from 'prop-types'
import LikeSvg from './LikeSvg'

function LikeButton({textValue}) {
    return(
        <button>
            {textValue}
          <LikeSvg />
        </button>
    )
}

LikeButton.propTypes = {
    textValue: PropTypes.string,
}

export default LikeButton;
