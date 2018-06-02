package cn.zxuqian.fshop.rest.services

import cn.zxuqian.fshop.annotations.Open
import cn.zxuqian.fshop.entities.Product
import cn.zxuqian.fshop.services.AbstractService
import cn.zxuqian.fshop.services.ProductService
import java.util.logging.Logger
import javax.enterprise.context.RequestScoped
import javax.inject.Inject
import javax.ws.rs.*
import javax.ws.rs.core.MediaType.*
import javax.ws.rs.core.Response
import javax.ws.rs.core.Response.Status.*

/**
 * General Restful Web Service for CRUD Operations.
 * T is the entity type
 */
@Open
@RequestScoped
abstract class AbstractRestService<T>(val clazz: Class<T>) {

    private val log: Logger = Logger.getLogger(clazz.canonicalName)

    protected abstract val service: AbstractService<T>

    @GET
    @Produces(APPLICATION_JSON)
    fun list(): Response {
        try {
            val list = service.getAll(clazz)
            return Response.ok(list).build()
        } catch (e: Exception) {
            e.printStackTrace()
            log.severe("查询失败: ${clazz.canonicalName}")
        }
        return Response.serverError().build()
    }

    @GET
    @Path("/{id}")
    @Produces(APPLICATION_JSON)
    fun single(@PathParam("id") id: Long): Response {
        try {
            val entity = service.getById(id, clazz)
            return Response.ok(entity).build()
        } catch (e: Exception) {
            e.printStackTrace()
            log.severe("查询id为 $id 的对象失败：${clazz.canonicalName}")
        }
        return Response.serverError().build()
    }

    @POST
    //@Produces(APPLICATION_JSON)
    @Consumes(APPLICATION_JSON)
    fun create(entity: T): Response {
        try {
            //val product = Product(0, "123", 22.0, "dsfddd")
            service.create(entity)
            return Response.status(CREATED).build()
        } catch (e: Exception) {
            e.printStackTrace()
            log.severe("添加失败: ${clazz.canonicalName}")
        }
        return Response.serverError().build()
    }

    @PUT
    @Consumes(APPLICATION_JSON)
    fun update(entity: T): Response {
        try {
            //val product = Product(1, "234", 52.0, "aaaa")
            service.update(entity)
            return Response.status(OK).build()
        } catch (e: Exception) {
            e.printStackTrace()
            log.severe("更新失败: ${clazz.canonicalName}")
        }
        return Response.serverError().build()
    }

    @Path("/{id}")
    @DELETE
    fun remove(@PathParam("id") id: Long): Response {
        //val productId = 2
        try {
            service.remove(id, clazz)
            return Response.status(OK).build()
        } catch (e: Exception) {
            e.printStackTrace()
            log.severe("删除失败: ${clazz.canonicalName}")
        }
        return Response.serverError().build()
    }

}