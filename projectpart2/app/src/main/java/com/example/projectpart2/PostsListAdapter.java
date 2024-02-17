package com.example.projectpart2;

import android.content.Context;
import android.content.Intent;
import android.graphics.Bitmap;
import android.graphics.BitmapFactory;
import android.graphics.drawable.BitmapDrawable;
import android.graphics.drawable.Drawable;
import android.util.DisplayMetrics;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.ImageButton;
import android.widget.ImageView;
import android.widget.TextView;

import androidx.core.content.ContextCompat;
import androidx.recyclerview.widget.RecyclerView;

import com.example.myapplication.R;

import java.io.File;
import java.util.List;

public class PostsListAdapter extends RecyclerView.Adapter<PostsListAdapter.PostViewHolder> {

    Context context;
    class PostViewHolder extends RecyclerView.ViewHolder {
        private final TextView tvAuthor;
        private final TextView tvContent;
        private final ImageView ivPic;
        private final ImageView authorImage;
        private final TextView tvTime;
        private final ImageButton editPost;
        private final ImageButton deletePost;



        private PostViewHolder(View itemView) {
            super(itemView);
            tvAuthor = itemView.findViewById(R.id.tvAuthor);
            authorImage = itemView.findViewById(R.id.authorImage);
            tvContent = itemView.findViewById(R.id.tvContent);
            ivPic = itemView.findViewById(R.id.ivPic);
            tvTime = itemView.findViewById(R.id.tvTime);
            editPost = itemView.findViewById(R.id.editPost);
            deletePost = itemView.findViewById(R.id.deletePost);
        }
    }

    private final LayoutInflater mInflater;
    private List<Post> posts;


    public PostsListAdapter(Context context) {
        this.context = context;
        mInflater = LayoutInflater.from(context);
    }

    @Override
    public PostViewHolder onCreateViewHolder(ViewGroup parent, int viewType) {
        View itemView = mInflater.inflate(R.layout.post_layout, parent, false);
        return new PostViewHolder(itemView);
    }

    @Override
    public void onBindViewHolder(PostViewHolder holder, int position) {
        if (posts != null) {
            Post current = posts.get(position);
            String authorImageString = current.getAuthor().getPic();
            String postImageString = current.getPic();
            Drawable imageAuthor;
            Drawable imagePost;
            if (isDrawableResource(context, authorImageString)) {
                imageAuthor = getDrawableFromStringName(context, authorImageString);
            }
            else {
                Bitmap bitmap1 = getBitmapFromFilePath(authorImageString);
                imageAuthor = getDrawableFromBitmap(context, bitmap1);
            }
            if (isDrawableResource(context, postImageString)) {
                imagePost = getDrawableFromStringName(context, postImageString);
            }
            else {
                Bitmap bitmap2 = getBitmapFromFilePath(postImageString);
                imagePost = getDrawableFromBitmap(context, bitmap2);
            }
            DisplayMetrics displayMetrics = context.getResources().getDisplayMetrics();
            int screenHeight = displayMetrics.heightPixels;
            int screenWidth = displayMetrics.widthPixels;

            // Calculate desired height and width
            int desiredHeight = (int) (screenHeight * 0.8); // 20% of screen height
            //int desiredWidth = (int) (screenWidth * 0.6); // 50% of screen width

            // Set the size of the ViewHolder's itemView
            ViewGroup.LayoutParams layoutParams = holder.itemView.getLayoutParams();
            layoutParams.height = desiredHeight;
            //layoutParams.width = desiredWidth;
            holder.tvAuthor.setText(current.getAuthor().getDisplayName());
            holder.authorImage.setImageDrawable(imageAuthor);
            holder.tvContent.setText(current.getContent());
            holder.ivPic.setImageDrawable(imagePost);
            holder.tvTime.setText(current.getPublishTime());
            holder.itemView.setLayoutParams(layoutParams);

            holder.editPost.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    onEditClicked(current);
                }
            });

            holder.deletePost.setOnClickListener(new View.OnClickListener() {
                @Override
                public void onClick(View v) {
                    onDeleteClicked(current);
                }
            });

        }
    }

    public void setPosts(List<Post> s) {
        posts = s;
        notifyDataSetChanged();
    }

    @Override
    public int getItemCount() {
        if (posts != null) {
            return posts.size();
        }
        else return 0;
        }
        public List<Post> getPosts() {
            return posts;
    }

    public static Bitmap getBitmapFromFilePath(String filePath) {
        File imgFile = new File(filePath);
        if (imgFile.exists()) {
            Bitmap bitmap = BitmapFactory.decodeFile(imgFile.getAbsolutePath());
            return bitmap;
        }
        return null;
    }

    public static Drawable getDrawableFromBitmap(Context context, Bitmap bitmap) {
        if (bitmap != null) {
            return new BitmapDrawable(context.getResources(), bitmap);
        }
        return null;
    }

    public static boolean isDrawableResource(Context context, String imageName) {
        int resourceId = context.getResources().getIdentifier(imageName, "drawable", context.getPackageName());
        return resourceId != 0;
    }

    public static Drawable getDrawableFromStringName(Context context, String drawableName) {
        int resourceId = context.getResources().getIdentifier(drawableName, "drawable", context.getPackageName());
        if (resourceId != 0) { // Resource found
            return ContextCompat.getDrawable(context, resourceId);
        } else {
            // Handle the case where the drawable was not found
            return null;
        }
    }

    public void onEditClicked(Post post) {
        // Handle edit action, e.g., open an EditPostActivity
        Intent intent = new Intent(context, EditPostActivity.class);
        intent.putExtra("post", post); // Assuming your Post model has an ID
        ((FeedActivity)context).startEditPostActivity(intent);
    }
    public void onDeleteClicked(Post post) {
        // Handle delete action, e.g., show a confirmation dialog
        this.posts.remove(post);
        notifyDataSetChanged();
    }

    public void updatePost(Post updatedPost) {
        // Find the post by ID or another unique identifier and update it
        int index = updatedPost.getId();
        for (Post post : posts) {
            if (post.getId() == index) {
                post.setContent(updatedPost.getContent());
                post.setPic(updatedPost.getPic());
            }// This requires a properly overridden equals method in Post
            notifyDataSetChanged();
        }

    }
    public void addPost(Post post) {
        posts.add(post);
        notifyDataSetChanged();

    }

}
