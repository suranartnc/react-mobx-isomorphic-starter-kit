import { observable, computed } from 'mobx'
import { observer } from 'mobx-react'
import React, { Component } from 'react'
import ReactDOM from 'react-dom'

class BlogStore {
    @observable posts = []
    @computed get postCount() {
        return this.posts.length
    }
}

@observer
class BlogList extends Component {
    render() {
        return (
            <div>
                <ul>
                    {this.props.store.posts.map((post, index) => {
                        <li id={post.id}>{post.title}</li>
                    })}
                </ul>
            </div>
        )
    }
}

@observer
class BlogApp extends Component {
    render() {
        return (
            <div>
                <BlogList {...this.props} />
                <p>{ this.props.store.postCount } Posts</p>
            </div>
        )
    }
}

const store = new BlogStore()

ReactDOM.render(<BlogApp store={store} />, document.getElementById('app'));

store.posts.push({
    id: Math.random(),
    title: 'Title 1'
})