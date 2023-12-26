package stephen.minion;

import org.assertj.core.api.Assertions;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
class MinionApplicationTests {

	@Autowired
	TestRestTemplate testRestTemplate;

	@Test
	void shouldShowStringDemo() {
		ResponseEntity<String> responseEntity = testRestTemplate.getForEntity("/api/demo",String.class);
		Assertions.assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
		System.out.println(responseEntity.getBody());
	}

	@Test
	void shouldShowUI(){
		ResponseEntity<String> responseEntity = testRestTemplate.getForEntity("/*",String.class);
		Assertions.assertThat(responseEntity.getStatusCode()).isEqualTo(HttpStatus.OK);
	}

}
