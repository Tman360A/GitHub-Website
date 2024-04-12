import "../Css/Pages/ErrorPage.css"

function ErrorPage() {

        //sets document title
        document.title = "404 Error";

    return(
        <div className="Error"> 
            <h1>404 Error</h1>
            <h1>Page Not Found</h1>
        </div>
    );
}

export default ErrorPage