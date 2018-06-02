package cn.zxuqian.fshop.entities

import javax.persistence.*

@Entity
@Table(name = "user")
data class User (
        @Id
        @GeneratedValue
        var id: Long,
        var username: String,
        var password: String,
        @OneToMany(mappedBy = "user", fetch = FetchType.EAGER)
        var orders: List<Order>,
        var status:Status = Status.ACTIVE
)