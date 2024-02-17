package com.example.projectpart2;

import android.app.Activity;
import android.content.Intent;
import android.os.Bundle;
import android.view.MenuItem;
import android.view.View;
import android.widget.PopupMenu;
import android.widget.Toast;

import androidx.activity.result.ActivityResultLauncher;
import androidx.activity.result.contract.ActivityResultContracts;
import androidx.appcompat.app.AppCompatActivity;
import androidx.recyclerview.widget.LinearLayoutManager;

import com.example.myapplication.R;
import com.example.myapplication.databinding.ActivityFeedBinding;

import java.util.ArrayList;
import java.util.List;
public class FeedActivity extends AppCompatActivity {


    private static List<Post> posts = new ArrayList<>();
    private ActivityFeedBinding binding;
    private User currentUser;
    private ActivityResultLauncher<Intent> editPostActivityResultLauncher;
    private ActivityResultLauncher<Intent> newPostActivityResultLauncher;

    public ActivityResultLauncher<Intent> getEditPostActivityResultLauncher() {
        return editPostActivityResultLauncher;
    }

    @Override
    protected void onCreate(Bundle savedInstanceState) {

        final PostsListAdapter adapter = new PostsListAdapter(this);

        currentUser = (User) getIntent().getSerializableExtra("currentUser");

        super.onCreate(savedInstanceState);
        binding = ActivityFeedBinding.inflate(getLayoutInflater());
        setContentView(binding.getRoot());

        binding.imageMenuButton.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View view) {
                showPopupMenu(view);
            }
        });


        binding.lstPosts.setAdapter(adapter);
        binding.lstPosts.setLayoutManager(new LinearLayoutManager(this));

        posts.add(new Post(currentUser, "hello world!", "cat"));

        posts.add(new Post(currentUser, "Hey I'm a cat", "cat"));

        adapter.setPosts(posts);

        binding.btnAdd.setOnClickListener(new View.OnClickListener() {
            @Override
            public void onClick(View v) {

                Intent intent = new Intent(FeedActivity.this, newPostActivity.class);
                intent.putExtra("currentUser", currentUser);
                startNewPostActivity(intent);
            }
        });

        editPostActivityResultLauncher = registerForActivityResult(
                new ActivityResultContracts.StartActivityForResult(),
                result -> {
                    if (result.getResultCode() == Activity.RESULT_OK) {
                        Intent data = result.getData();
                        if (data != null) {
                            Post updatedPost = (Post) data.getSerializableExtra("updated_post");
                            // Assuming you have a method to update the post in your adapter's data set
                            adapter.updatePost(updatedPost);
                        }
                    }
                });
        newPostActivityResultLauncher = registerForActivityResult(
                new ActivityResultContracts.StartActivityForResult(),
                result -> {
                    if (result.getResultCode() == Activity.RESULT_OK) {
                        Intent data = result.getData();
                        if (data != null) {
                            Post newPost = (Post) data.getSerializableExtra("new_post");
                            // Assuming you have a method to update the post in your adapter's data set
                            adapter.addPost(newPost);
                        }
                    }
                });


    }

    private void showPopupMenu(View view) {
        PopupMenu popupMenu = new PopupMenu(FeedActivity.this, view);
        popupMenu.getMenuInflater().inflate(R.menu.menu_example, popupMenu.getMenu());
        popupMenu.setOnMenuItemClickListener(new PopupMenu.OnMenuItemClickListener() {
            @Override
            public boolean onMenuItemClick(MenuItem menuItem) {
                Toast.makeText(FeedActivity.this, menuItem.getTitle() + " clicked", Toast.LENGTH_SHORT).show();
                return true;
            }
        });
        popupMenu.show();
    }

    public void startEditPostActivity(Intent intent) {
        editPostActivityResultLauncher.launch(intent);
    }
    public void startNewPostActivity(Intent intent) {
        newPostActivityResultLauncher.launch(intent);
    }
}
