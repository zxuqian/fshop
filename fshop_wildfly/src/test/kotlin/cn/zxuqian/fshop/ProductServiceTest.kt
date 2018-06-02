package cn.zxuqian.fshop

import org.jboss.arquillian.junit.Arquillian
import org.jboss.arquillian.test.api.ArquillianResource
import org.junit.Ignore
import org.junit.Test
import org.junit.runner.RunWith
import org.wildfly.swarm.arquillian.DefaultDeployment
import javax.naming.InitialContext


//@RunWith(Arquillian::class)
//@DefaultDeployment(type = DefaultDeployment.Type.JAR)
@Ignore
class ProductServiceTest {


//    @ArquillianResource
//    private lateinit var context: InitialContext
//
//    @Test
//    fun testInsertion() {
//        //val product = Product(0, "333", 22.11, "ssss")
//        //productService.createProduct(product)
//        println(context.lookup("java:jboss/datasources/MyDS").toString())
//    }
}