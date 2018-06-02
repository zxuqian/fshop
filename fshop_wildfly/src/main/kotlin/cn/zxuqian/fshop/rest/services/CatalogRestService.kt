package cn.zxuqian.fshop.rest.services

import cn.zxuqian.fshop.annotations.Open
import cn.zxuqian.fshop.entities.Catalog
import cn.zxuqian.fshop.entities.Order
import cn.zxuqian.fshop.entities.User
import cn.zxuqian.fshop.services.AbstractService
import javax.enterprise.context.RequestScoped
import javax.inject.Inject
import javax.ws.rs.Path

/**
 * Restful Web Service for order management.
 */
@Open
@Path("/catalog")
@RequestScoped
class CatalogRestService : AbstractRestService<Catalog>(Catalog::class.java) {
    @Inject
    protected override lateinit var service: AbstractService<Catalog>
}