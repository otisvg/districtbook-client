import React, { Component } from "react"
import PostForm from './PostForm'

class PostFeed extends Component {
  constructor(props) {
    super(props)

    this.state = {
      items: [],
      isLoaded: false
    }
  }

  render() {
    return (
      <div className="PostFeed">
        <PostForm />
          <div className="Posts">
            <p>Post #1</p>
          </div>
      </div>
    )
  }
}

{/* <div className="post-message">
              {items.map(item => (
                <li key={items.id}>
                  {item.message} | {item.user_id} | {item.created_at}
                </li>
              ))}
             </div> */}
export default PostFeed;
// <div class="all-posts">
//   <% @posts.each do |post| %>
//     <div class="post-message">
//       <!-- Add link to profiles & User picture if possible -->
//       <p><% user = User.find_by(id: post.user_id) %>
//       <p><%= user.username %></p>
//       <p><%= post.message %></p> 
//       <p class="post-time"><%= post.created_at.strftime("%d-%m-%Y at %l:%M") %></p>
//       <% if current_user.present? && current_user[:id] == post[:user_id] %>
//         <%= link_to('edit', {:controller => "posts", :action => 'edit', :id => post.id }, :get => :edit ) %>
//         <%= link_to('delete', {:controller => "posts", :action => 'destroy', :id => post.id }, :method => :delete, data: { confirm: "Are you sure?" }) %>
//       <% end %></p>
//             </div>
