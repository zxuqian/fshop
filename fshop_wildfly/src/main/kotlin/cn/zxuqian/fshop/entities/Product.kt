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
        var count: Int,
        var Description: String,
        @ManyToMany(fetch = FetchType.EAGER)
        @JoinTable(name = "product_category")
        var categories: List<Category>,
        //@Enumerated(EnumType.ORDINAL)
        var status: Status = Status.ACTIVE
)