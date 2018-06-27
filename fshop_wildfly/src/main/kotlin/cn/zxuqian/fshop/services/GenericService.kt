package cn.zxuqian.fshop.services

import cn.zxuqian.fshop.annotations.Open
import cn.zxuqian.fshop.services.contract.IGenericService
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

@Open
class GenericService<T> : IGenericService<T> {

    @PersistenceContext(name="MyPU")
    protected lateinit var em: EntityManager

    override fun getById(id: Long, entity: Class<T>): T {

        return em.find(entity, id)
    }

    override fun getAll(entity: Class<T>): List<T> {
        return em.createQuery("from " + entity.simpleName, entity).resultList
    }

    override fun create(t: T): T {
        em.persist(t)
        return t
    }

    override fun update(t: T): T {
        em.merge(t)
        return t
    }

    override fun remove(id: Long, entity: Class<T>) {
        em.remove(getById(id, entity))
    }

}