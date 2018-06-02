package cn.zxuqian.fshop.entities

import javax.persistence.*

@Entity
@Table(name = "product")
//@JsonIgnoreProperties("name", allowSetters = true)
data class Product(
        @Id
        @GeneratedValue
        var id: Long = 0,
        var name: String,
        var price: Double,
        var Description: String,
        @ManyToMany
        @JoinTable(name = "product_catalog")
        var catalogs: List<Catalog>,
        var status: Status = Status.ACTIVE
)