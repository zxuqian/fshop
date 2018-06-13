package cn.zxuqian.fshop.services

import cn.zxuqian.fshop.annotations.Open
import cn.zxuqian.fshop.entities.User
import cn.zxuqian.fshop.services.contract.IUserService
import javax.enterprise.context.ApplicationScoped
import javax.transaction.Transactional

/**
 * Service for product management.
 */
@Open
@Transactional
@ApplicationScoped
class UserService : GenericService<User>(), IUserService

//@Qualifier
//@Retention(AnnotationRetention.RUNTIME)
//@Target(AnnotationTarget.TYPE, AnnotationTarget.FUNCTION, AnnotationTarget.FIELD, AnnotationTarget.VALUE_PARAMETER)
//annotation class User