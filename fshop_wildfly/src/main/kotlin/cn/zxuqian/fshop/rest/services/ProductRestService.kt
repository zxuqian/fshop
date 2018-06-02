package cn.zxuqian.fshop.rest.services

import cn.zxuqian.fshop.annotations.Open
import cn.zxuqian.fshop.entities.Product
import cn.zxuqian.fshop.services.ProductService
import javax.enterprise.context.RequestScoped
import javax.inject.Inject
import javax.ws.rs.Path

/**
 * Restful Web Service for product management.
 */
@Open
@Path("/product")
@RequestScoped
class ProductRestService: AbstractRestService<Product>(Product::class.java) {

    /**
     * Protected is necessary here despite intellij says
     * it is redundant.
     * @Inject cannot work on public fields according to
     * the statement of RedHat
     * @see https://access.redhat.com/solutions/463743
     */
    @Inject
    protected override lateinit var service: ProductService

}