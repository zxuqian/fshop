package cn.zxuqian.fshop.rest.services

import cn.zxuqian.fshop.annotations.Open
import cn.zxuqian.fshop.entities.User
import cn.zxuqian.fshop.services.UserService
import javax.enterprise.context.RequestScoped
import javax.inject.Inject
import javax.ws.rs.Path

/**
 * Restful Web Service for order management.
 */
@Open
@Path("/user")
@RequestScoped
class UserRestService : AbstractRestService<User>(User::class.java) {
    @Inject
    protected override lateinit var service: UserService
}
