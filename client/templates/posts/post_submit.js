Template.postSubmit.events({
  'submit-form': function(e){
    e.preventDefault();

    var post = {
      url: $(e.target).find('[name=url]').val(),
      title: $(e.target).find('[name=title]').val()
    };

    post_id = Post.insert(post);
    Router.go('postPage', post);
  }
});