package com.espark.adarsh.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.io.Serializable;
import java.util.LinkedList;
import java.util.List;

@Setter
@Getter
@Entity
@Table(name = "user_role")
public class UserRole implements Serializable {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Enumerated(EnumType.STRING)
    private Role roleName;

    @ManyToMany(mappedBy = "roles"
            , cascade = {CascadeType.PERSIST}
    , fetch = FetchType.EAGER)
    private List<User> user = new LinkedList<>();

    public UserRole() {
    }

    public UserRole(Role roleName) {
        this.roleName = roleName;
    }

    public void setUser(User user) {
        this.user.add(user);
    }
}
