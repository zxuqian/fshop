package cn.zxuqian.fshop.services

import cn.zxuqian.fshop.annotations.Open
import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

@Open
abstract class AbstractService<T> {

    @PersistenceContext(name="MyPU")
    protected lateinit var em: EntityManager

    fun getById(id: Long, entity: Class<T>): T {

        return em.find(entity, id)
    }

    fun getAll(entity: Class<T>): List<T> {
        return em.createQuery("from " + entity.simpleName, entity).resultList
    }

    fun create(t: T) {
        em.persist(t)
    }

    fun update(t: T) {
        em.merge(t)
    }

    fun remove(id: Long, entity: Class<T>) {
        em.remove(getById(id, entity))
    }

}