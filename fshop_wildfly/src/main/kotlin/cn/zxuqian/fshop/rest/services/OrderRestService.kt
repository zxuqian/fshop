package cn.zxuqian.fshop.rest.services

import cn.zxuqian.fshop.annotations.Open
import cn.zxuqian.fshop.entities.Order
import cn.zxuqian.fshop.services.AbstractService
import javax.enterprise.context.RequestScoped
import javax.inject.Inject
import javax.ws.rs.Path

/**
 * Restful Web Service for order management.
 */
@Open
@Path("/order")
@RequestScoped
class OrderRestService : AbstractRestService<Order>(Order::class.java) {
    @Inject
    protected override lateinit var service: AbstractService<Order>
}