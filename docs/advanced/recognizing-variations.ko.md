# 변형을 조기에 인식하는 방법

롤 오프 시작 시 카운트다운 전에 보이는 맵의 전경에서 패턴의 변형을 인식할 수 있습니다. 이렇게 시작 전에 전경을 보고 어떤 변형인지 인식할 수 있으면 첫 번째 랩을 소비하면서 패턴을 알아낼 필요가 없어집니다.

아래는 카운트다운 전에 보이는 전경에서 주황색 및 파란색 롤의 변형을 인식하는 데 유용할 수 있는 간단한 결정 트리입니다.

![Flow chart](../images/advanced/recognizing-variants/flow-chart-light.jpg#only-light)
![Flow chart](../images/advanced/recognizing-variants/flow-chart-dark.jpg#only-dark)

## 패턴

각 패턴을 조기에 인식하는 데 사용할 수 있는 전략은 아래에 설명되어 있습니다.

### 5 벽

5 벽 패턴은 앞쪽에는 기둥이 있고 뒤쪽에는 기둥이 없습니다. 아래 사진은 주황색 5 벽 패턴입니다.

![5 Waller](../images/advanced/recognizing-variants/5-waller.jpg)

### 고립된 듀오

고립된 듀오 패턴은 앞쪽에는 아무것도 없고 뒤쪽에는 기둥이 있습니다. 아래 사진은 주황색 고립된 듀오 패턴과 파란색 고립된 듀오 패턴을을 보여줍니다.

![Isolated Duo](../images/advanced/recognizing-variants/isolated-duo.jpg)

### 클로즈드-오픈 & 오픈-클로즈드

클로즈드-오픈과 오픈-클로즈드 패턴은 앞쪽과 뒤쪽 모두에 기둥이 있다는 것으로 구분할 수 있습니다. 아래 사진은 주황색 클로즈드-오픈 패턴과 파란색 오픈-클로즈드 패턴을 보여줍니다.

![Closed-Open & Open-Closed](../images/advanced/recognizing-variants/closed-open-open-closed.jpg)

### 이지 4

이지 4 패턴은 앞쪽에는 벽이 있고 뒤쪽에는 기둥이 있습니다. 아래 그림은 주황색 이지 4 패턴과 파란색 이지 4 패턴을 보여줍니다.

![Easy 4](../images/advanced/recognizing-variants/easy-4.jpg)

### 그랜드 캐니언

그랜드 캐니언 패턴은 앞쪽과 뒤쪽이 벽으로 둘러싸여 있습니다. 아래 그림은 파란색 그랜드 캐니언의 패턴을 보여줍니다.

![Grand Canyon side view](../images/advanced/recognizing-variants/grand-canyon.jpg)

그랜드 캐니언 패턴은 롤의 안쪽 모서리에 녹색 줄무늬가 있고 하단에 노란색 기둥이 있는 유일한 패턴입니다.

![Grand Canyon side view](../images/advanced/recognizing-variants/grand-canyon-side-view.jpg)

### 기둥 참호

그랜드 캐니언 패턴과 마찬가지로 기둥 참호 패턴도 앞쪽과 뒤쪽에 벽이 있습니다. 아래 그림은 파란색 기둥 참호 패턴을 보여줍니다.

![Pillar Trench](../images/advanced/recognizing-variants/pillar-trench.jpg)

그랜드 캐니언 패턴과 구별하려면 롤의 안쪽 모서리에 주황색 줄무늬가 있고 하단에 보라색 기둥이 있는지 확인하세요.

![Pillar Trench side view](../images/advanced/recognizing-variants/pillar-trench-side-view.jpg)

## 기타 팁

파란색 고립된 듀오 패턴은 안쪽 모서리에 보라색 줄무늬가 있는 유일한 파란색 패턴이기 때문에 모서리 안쪽에 보라색 줄무늬 색상으로 쉽게 알아볼 수 있습니다.

![Isolated Duo Blue](../images/advanced/recognizing-variants/isolated-duo-blue-side-view.jpg)

마찬가지로, 파란색 오픈-클로즈드 패턴은 모서리가 금색인 유일한 파란색 패턴이기 때문에 모서리 색상이 금색인 것으로 쉽게 알아볼 수 있습니다.

![Isolated Duo Blue](../images/advanced/recognizing-variants/open-closed-blue-side-view.jpg)
