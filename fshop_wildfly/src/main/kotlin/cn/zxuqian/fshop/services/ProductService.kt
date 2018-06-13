package cn.zxuqian.fshop.services

import cn.zxuqian.fshop.annotations.Open
import cn.zxuqian.fshop.entities.Product
import cn.zxuqian.fshop.services.contract.IProductService
import javax.enterprise.context.ApplicationScoped
import javax.transaction.Transactional

/**
 * Service for product management.
 */
@Open
@Transactional
@ApplicationScoped
class ProductService : GenericService<Product>(), IProductService

//@Qualifier
//@Retention(AnnotationRetention.RUNTIME)
//@Target(AnnotationTarget.TYPE, AnnotationTarget.FUNCTION, AnnotationTarget.FIELD, AnnotationTarget.VALUE_PARAMETER)
//annotation class Product