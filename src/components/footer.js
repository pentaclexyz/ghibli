import React, {Component} from "react"

class Footer extends Component {
    render() {
        return <footer>
            <article className={"footer-content flex-group space-between flex-align-center"}>
                <div>© 2000 - {new Date().getFullYear()} Studio Ghibli - this is a fan site. All images have been sourced from the public domain via google dot com.
                    <p>Built for Ghibli enjoyers by <a href={"https://twitter.com/0xpentacle"} target={"_blank"} rel="noopener noreferrer">0xPentacle</a></p>
                </div>

            </article>
        </footer>
    }
}

export default Footer
