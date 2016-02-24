package com.test.repository;

import com.test.domain.Favorite;

import org.springframework.data.jpa.repository.*;

import java.util.List;

/**
 * Spring Data JPA repository for the Favorite entity.
 */
public interface FavoriteRepository extends JpaRepository<Favorite,Long> {

    @Query("select favorite from Favorite favorite where favorite.user.login = ?#{principal.username}")
    List<Favorite> findByUserIsCurrentUser();

}
