import './PopUp.css'
const PopUp = ({ close }) => {
    return (
        <div className="PopUp left-16 sm:inset-x-1/4 w-80 md:w-1/2  flex items-center justify-center">
            <div className='infoBlock text-center'>
                <h1>Thank you for your email!</h1>
                <h5>I will get back to you as soon as possible</h5>
                <button className="button bg-gradient-to-r from-green-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
                    onClick={() => close(false)}>Close
                </button>
            </div>
        </div>
    )
}

export default PopUp