package com.espark.adarsh.entity;

public enum Role {
    ADMIN("ADMIN"), USER("USER"), GUEST("GUEST");
    String role;

    Role(String role) {
        this.role = role;
    }

    public static Role getRole(String roleName) {
        return Role.valueOf(roleName.toUpperCase());
    }
}
