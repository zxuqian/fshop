package cn.zxuqian.fshop.services.contract

import javax.persistence.EntityManager
import javax.persistence.PersistenceContext

interface IGenericService<T> {
    //val em: EntityManager

    fun getById(id: Long, entity: Class<T>): T

    fun getAll(entity: Class<T>): List<T>

    fun create(t: T): T

    fun update(t: T): T

    fun remove(id: Long, entity: Class<T>)
}