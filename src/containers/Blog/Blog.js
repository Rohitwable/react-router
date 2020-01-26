import React, { Component } from 'react';
import './Blog.css';
import Posts from '../Posts/Posts'
import { Route, Link } from 'react-router-dom';
import NewPost from '../../components/NewPost/NewPost';
class Blog extends Component {


    render() {
        return (
            <div className="Blog">
                <header>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to={{
                                    pathname: '/new-post',
                                    hash: '#hash',
                                    search: '?limit=5'
                                }}>New Post</Link>
                            </li>
                        </ul>
                    </nav>
                </header>
                {/* <Route path="/" exact render={() => <h1>Home</h1>} />
                <Route path="/" exact render={() => <h1>Home2</h1>} /> */}
                <Route path="/" exact component={Posts} />
                <Route path="/new-post" exact component={NewPost} />

                {/* <section>
                    <FullPost id={this.state.selectedPostId} />
                </section>
                <section>
                    <NewPost />
                </section> */}
            </div>
        );
    }
}

export default Blog;