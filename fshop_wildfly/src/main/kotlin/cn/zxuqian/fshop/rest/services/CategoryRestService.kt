package cn.zxuqian.fshop.rest.services

import cn.zxuqian.fshop.annotations.Open
import cn.zxuqian.fshop.entities.Category
import cn.zxuqian.fshop.services.AbstractService
import cn.zxuqian.fshop.services.CategoryService
import javax.enterprise.context.RequestScoped
import javax.inject.Inject
import javax.inject.Qualifier
import javax.ws.rs.Path

/**
 * Restful Web Service for order management.
 */
@Open
@Path("/category")
@RequestScoped
class CategoryRestService : AbstractRestService<Category>(Category::class.java) {
    @Inject
    protected override lateinit var service: CategoryService
}
