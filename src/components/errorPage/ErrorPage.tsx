import { useRouteError } from "react-router-dom"

export const ErrorPage = () => {

    const error = useRouteError()
    console.log(error)

    return (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '100px' }}>
            <img src="https://internetdevels.com/sites/default/files/public/blog_preview/404_page_cover.jpg" alt="error" />
            {/* <p>
                <i>{error.statusText || error.message}</i>
            </p> */}
        </div>
    )
}