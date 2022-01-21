package org.charess.training.controller.security;

import org.charess.training.domain.security.Category;
import org.charess.training.service.security.CategoryService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/category")
public class CategoryController {

    private CategoryService categoryService;
    private final Logger log = LoggerFactory.getLogger(PlaceController.class);

    @Autowired
    public CategoryController(CategoryService categoryService) {
        this.categoryService = categoryService;
    }

    @RequestMapping(method= RequestMethod.GET)
    public List<Category> list() {
        return categoryService.list();
    }

    @RequestMapping(value = "/search/{criteria}", method= RequestMethod.GET)
    public List<Category> search(@PathVariable(value = "criteria") String criteria) {
        return categoryService.search(criteria);
    }

    @RequestMapping(value = "/{id}", method= RequestMethod.DELETE)
    public void delete(@PathVariable("id") Integer id) {
        categoryService.delete(id);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<String> save(@RequestBody Category category){
        try {
            return categoryService.save(category)==null?new ResponseEntity<>("", HttpStatus.BAD_REQUEST):new ResponseEntity<>("", HttpStatus.OK);
        } catch(Exception e){
            return new ResponseEntity<>(e.getMessage(), HttpStatus.EXPECTATION_FAILED);
        }
    }
}
