package cn.zxuqian.fshop.services

import cn.zxuqian.fshop.annotations.Open
import cn.zxuqian.fshop.entities.Category
import cn.zxuqian.fshop.entities.Product
import cn.zxuqian.fshop.services.contract.ICategoryService
import javax.enterprise.context.ApplicationScoped
import javax.inject.Qualifier
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext
import javax.transaction.Transactional

/**
 * Service for product management.
 */
@Open
@Transactional
@ApplicationScoped
class CategoryService : GenericService<Category>(), ICategoryService

//@Qualifier
//@Retention(AnnotationRetention.RUNTIME)
//@Target(AnnotationTarget.TYPE, AnnotationTarget.FUNCTION, AnnotationTarget.FIELD, AnnotationTarget.VALUE_PARAMETER)
//annotation class Category