package cn.zxuqian.fshop.rest.services

import cn.zxuqian.fshop.annotations.Open
import cn.zxuqian.fshop.entities.Product
import cn.zxuqian.fshop.services.ProductService
import java.util.logging.Logger
import javax.enterprise.context.RequestScoped
import javax.inject.Inject
import javax.ws.rs.*
import javax.ws.rs.core.MediaType.*
import javax.ws.rs.core.Response
import javax.ws.rs.core.Response.Status.*

/**
 * Restful Web Service for product management.
 */
@Open
@Path("/product")
@RequestScoped
class ProductRestService {

    private val log: Logger = Logger.getLogger(ProductRestService::class.java.canonicalName)

    @Inject
    private lateinit var service: ProductService

    @GET
    @Produces(APPLICATION_JSON)
    fun productList(): Response {
        try {
            val productList = service.getAll(Product::class.java)
            return Response.ok(productList).build()
        } catch (e: Exception) {
            e.printStackTrace()
            log.severe("查询所有产品失败")
        }
        return Response.serverError().build()
    }

    @GET
    @Path("/{id}")
    @Produces(APPLICATION_JSON)
    fun productSingle(@PathParam("id") id: Int): Response {
        try {
            val product = service.getById(id, Product::class.java)
            return Response.ok(product).build()
        } catch (e: Exception) {
            e.printStackTrace()
            log.severe("查询id为 $id 的产品失败")
        }
        return Response.serverError().build()
    }

    @POST
    //@Produces(APPLICATION_JSON)
    @Consumes(APPLICATION_JSON)
    fun createProduct(product: Product): Response {
        try {
            //val product = Product(0, "123", 22.0, "dsfddd")
            service.create(product)
            return Response.status(CREATED).build()
        } catch (e: Exception) {
            e.printStackTrace()
            log.severe("添加产品失败")
        }
        return Response.serverError().build()
    }

    @PUT
    @Consumes(APPLICATION_JSON)
    fun updateProduct(product: Product): Response {
        try {
            //val product = Product(1, "234", 52.0, "aaaa")
            service.update(product)
            return Response.status(OK).build()
        } catch (e: Exception) {
            e.printStackTrace()
            log.severe("更新产品失败")
        }
        return Response.serverError().build()
    }

    @Path("/{id}")
    @DELETE
    fun deleteProduct(@PathParam("id") id: Int): Response {
        //val productId = 2
        try {
            service.remove(id, Product::class.java)
            return Response.status(OK).build()
        } catch (e: Exception) {
            e.printStackTrace()
            log.severe("删除产品失败")
        }
        return Response.serverError().build()
    }

}