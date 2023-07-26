function ErrorAnimation(props){
    return(
        <div className="card h-[20rem] w-full flex justify-center">
        <iframe src="https://embed.lottiefiles.com/animation/98642" className="pointer-events-none"></iframe>
        <span className="text-center">Error: {props.errorMessage}</span>
        </div>
    )
}

function LoadingAnimation(){
    return(
        <div className="h-fit flex flex-col items-center">
        <iframe src="https://embed.lottiefiles.com/animation/9844" className="pointer-events-none"></iframe>
        <span className="text-center">Loading...</span>
    </div>
    )
}

export {ErrorAnimation,LoadingAnimation}