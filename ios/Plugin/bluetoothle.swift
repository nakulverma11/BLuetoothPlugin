import Foundation

@objc public class bluetoothle: NSObject {
    @objc public func echo(_ value: String) -> String {
        print(value)
        return value
    }
}
