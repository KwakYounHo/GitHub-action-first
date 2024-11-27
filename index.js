const root = document.getElementById("root");

const paragraphOne = document.createElement("p");
paragraphOne.innerHTML = "저는 Javascript에 의해 동적으로 생성되었습니다.";

root.appendChild(paragraphOne);

const paragraphTwo = document.createElement("p");
paragraphTwo.innerHTML =
  "GitHub Actions와 Docker 그리고 AWS-S3를 이용해서 CD 파이프라인을 구축 중입니다.";
root.appendChild(paragraphTwo);

const paragraphThree = document.createElement("p");
paragraphThree.innerHTML = "안녕하세요 저는 머슴러닝 입니다.";
root.appendChild(paragraphThree);
