import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
    StyleSheet,
    Dimensions,
    Image,
    View
} from 'react-native'
import Author from './Author'
import Comments from './Comments'
import AddComment from './AddComment'

class Post extends Component {
    render() {
        const addComment = this.props.name ?
            <AddComment postId={this.props.id}></AddComment> : null
        return (
            <View style={styles.container}>
                <Image source={{ uri: this.props.image }} style={styles.image}></Image>
                <Author email={this.props.email} nickname={this.props.nickname}></Author>
                <Comments comments={this.props.comments}></Comments>
                {addComment}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        name: user.name
    }
}

//export default Post
export default connect(mapStateToProps)(Post)