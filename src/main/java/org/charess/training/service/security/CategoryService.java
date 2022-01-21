package org.charess.training.service.security;

import org.charess.training.domain.security.Category;

import java.util.List;

public interface CategoryService {

    List<Category> list();
    List<Category> search(String criteria);
    void delete(Integer id);
    Category save(Category place);
}
