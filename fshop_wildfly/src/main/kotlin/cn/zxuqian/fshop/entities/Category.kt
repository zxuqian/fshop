package cn.zxuqian.fshop.entities

import javax.persistence.*

@Entity
@Table(name = "category")
data class Category (
        @Id
        @GeneratedValue
        var id: Long = 0,
        var name: String,
        var status: Status = Status.ACTIVE,
        @ManyToMany(mappedBy = "categories", fetch = FetchType.EAGER)
        var products: List<Product>
)