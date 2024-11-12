package com.example.RegisterLogin.repo;

import com.example.RegisterLogin.entity.Users;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.config.EnableJpaRepositories;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@EnableJpaRepositories
@Repository
public interface UsersRepo extends JpaRepository<Users, Integer> {

    Users findByEmail(String email);

    Optional<Users> findOneByEmailAndPassword(String email, String password);
}
