package cn.zxuqian.fshop.services

import cn.zxuqian.fshop.annotations.Open
import cn.zxuqian.fshop.entities.Order
import cn.zxuqian.fshop.services.contract.IOrderService
import javax.enterprise.context.ApplicationScoped
import javax.transaction.Transactional

/**
 * Service for product management.
 */
@Open
@Transactional
@ApplicationScoped
class OrderService : GenericService<Order>(), IOrderService

//@Qualifier
//@Retention(AnnotationRetention.RUNTIME)
//@Target(AnnotationTarget.TYPE, AnnotationTarget.FUNCTION, AnnotationTarget.FIELD, AnnotationTarget.VALUE_PARAMETER)
//annotation class Order