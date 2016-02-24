package com.test.repository.search;

import com.test.domain.Space;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data ElasticSearch repository for the Space entity.
 */
public interface SpaceSearchRepository extends ElasticsearchRepository<Space, Long> {
}
