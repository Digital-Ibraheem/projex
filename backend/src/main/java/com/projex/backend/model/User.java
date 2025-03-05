package com.projex.backend.model;

import jakarta.persistence.*;
import lombok.*;

import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "users")
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(unique = true, nullable = false)
    private String email;

    @Column(unique = true, nullable = false)
    private String username;

    @Column(nullable = false)
    private String fullName;

    @Column(nullable = true) // Allow null for Google OAuth users
    private String password;

    @Column(nullable = false) // "local" (default) or "google"
    private String authProvider = "local";

    @Column(nullable = false) // Always set (Google or generated)
    private String profilePictureUrl;

    @Column(nullable = true, length = 500)
    private String bio;

    @Column(nullable = true)
    private String location;


    @ElementCollection
    @CollectionTable(name = "user_skills", joinColumns = @JoinColumn(name = "user_id"))
    @Column(name = "skill")
    private List<String> skills;

    @Column(nullable = true)
    private String githubUrl;

    @Column(nullable = true)
    private String linkedinUrl;
}
