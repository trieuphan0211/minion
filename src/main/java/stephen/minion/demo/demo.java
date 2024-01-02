package stephen.minion.demo;

import org.springframework.data.jpa.repository.query.Procedure;
import org.springframework.security.crypto.password.PasswordEncoder;
import stephen.minion.user.Role;
import stephen.minion.user.User;
import stephen.minion.user.UserRepository;

import java.util.List;

public class demo {
    @Procedure(name = "GetAllUser")
    List<User> user() {
        return null;
    }


    public static void main(String[] args) {

    }

}
