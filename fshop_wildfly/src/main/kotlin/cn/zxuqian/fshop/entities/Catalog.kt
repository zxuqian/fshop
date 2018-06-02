package cn.zxuqian.fshop.entities

import javax.persistence.*

@Entity
@Table(name = "catalog")
data class Catalog (
        @Id
        @GeneratedValue
        var id: Long = 0,
        var name: String,
        var status: Status = Status.ACTIVE,
        @ManyToMany(mappedBy = "catalogs", fetch = FetchType.EAGER)
        var products: List<Product>
)